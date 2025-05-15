import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, QrCode } from 'lucide-react';
import { HashLink } from './HashLink';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <HashLink to="#hero" className="flex items-center gap-2">
          <QrCode className="h-8 w-8 text-primary-600" />
          <span className="font-bold text-xl">CarrotQR</span>
        </HashLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <HashLink 
            to="#hero" 
            className="font-medium hover:text-primary-600 transition-colors"
          >
            Home
          </HashLink>
          <HashLink 
            to="#features" 
            className="font-medium hover:text-primary-600 transition-colors"
          >
            How It Works
          </HashLink>
          <HashLink 
            to="#signup" 
            className="btn btn-primary"
          >
            Get Started
          </HashLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <HashLink 
              to="#hero" 
              className="font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </HashLink>
            <HashLink 
              to="#features" 
              className="font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </HashLink>
            <HashLink 
              to="#signup" 
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </HashLink>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;