import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { QrCode, Settings, Printer, Award, Star } from 'lucide-react';

const featureSteps = [
  {
    id: 1,
    title: "Subscribe & Setup",
    description: "You subscribe, set up your brand colours, and define incentives to give to customers who post reviews or post about your business on their socials.",
    icon: "settings"
  },
  {
    id: 2,
    title: "Display Your QR Code",
    description: "Print a QR code to display next to your cash register or any high-visibility location in your business.",
    icon: "print"
  },
  {
    id: 3,
    title: "Customers Engage",
    description: "That's it! Your customers can scan the code and follow simple steps to post and claim their rewards.",
    icon: "qrcode"
  },
  {
    id: 4,
    title: "Reputation Growth",
    description: "Your business is now empowered by reputation. Watch your online presence grow organically through customer engagement.",
    icon: "award"
  }
];

const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [incentiveType, setIncentiveType] = useState('percentage');
  const [incentiveValue, setIncentiveValue] = useState('10');

  const getIconComponent = (iconName, size = 24) => {
    switch(iconName) {
      case 'settings':
        return <Settings size={size} />;
      case 'print':
        return <Printer size={size} />;
      case 'qrcode':
        return <QrCode size={size} />;
      case 'award':
        return <Award size={size} />;
      default:
        return <Settings size={size} />;
    }
  };

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">How <span className="gradient-text">CarrotQR</span> Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our simple system connects businesses with customers to boost your online reputation through reviews and social media engagement.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Step Indicators - Mobile Only */}
          <div className="md:hidden grid grid-cols-4 gap-2 mb-8">
            {featureSteps.map((step) => (
              <motion.button
                key={step.id}
                className={`flex flex-col items-center ${
                  activeStep === step.id ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setActiveStep(step.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: activeStep === step.id ? 1 : 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: step.id * 0.1 }}
              >
                <div className={`h-14 w-14 rounded-full flex items-center justify-center text-2xl mb-2 ${
                  activeStep === step.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.id}
                </div>
                <span className="text-xs">{step.title.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Visual Illustration */}
          <motion.div
            className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Isometric Illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] transform rotate-[30deg] skew-x-[15deg] skew-y-[-15deg] scale-[0.8] md:scale-100">
                {/* Setup Interface */}
                {activeStep === 1 && (
                  <motion.div
                    className="absolute top-[10%] right-[15%] w-64 h-72 bg-white rounded-lg shadow-xl overflow-hidden z-40"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-primary-600 text-white p-3">
                      <h4 className="text-sm font-bold">Configure Incentives</h4>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs mb-1">Reward Type</label>
                          <div className="flex gap-2">
                            <button
                              className={`px-3 py-1 text-xs rounded-full ${
                                incentiveType === 'percentage'
                                  ? 'bg-primary-500 text-white'
                                  : 'bg-gray-200'
                              }`}
                              onClick={() => setIncentiveType('percentage')}
                            >
                              Percentage
                            </button>
                            <button
                              className={`px-3 py-1 text-xs rounded-full ${
                                incentiveType === 'fixed'
                                  ? 'bg-primary-500 text-white'
                                  : 'bg-gray-200'
                              }`}
                              onClick={() => setIncentiveType('fixed')}
                            >
                              Fixed Amount
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs mb-1">Reward Value</label>
                          <div className="flex items-center">
                            <input
                              type="number"
                              className="w-20 text-sm p-1 border rounded-sm"
                              value={incentiveValue}
                              onChange={(e) => setIncentiveValue(e.target.value)}
                            />
                            <span className="ml-2 text-sm">
                              {incentiveType === 'percentage' ? '%' : '$'}
                            </span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-sm">
                          <p className="text-xs">
                            Customers will receive {incentiveValue}{incentiveType === 'percentage' ? '%' : '$'} off
                            their next purchase when they leave a review or social media post.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Printed QR Code */}
                {activeStep === 2 && (
                  <motion.div
                    className="absolute top-[10%] right-[15%] w-56 h-72 bg-white shadow-xl z-50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDVBQ0I5NzQ5RDI0MTFFNjk1M0ZGQTc2MUQyNzEyRjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDVBQ0I5NzU5RDI0MTFFNjk1M0ZGQTc2MUQyNzEyRjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENUFDQjk3MjlEMjQxMUU2OTUzRkZBNzYxRDI3MTJGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENUFDQjk3MzlEMjQxMUU2OTUzRkZBNzYxRDI3MTJGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGQOp8AAAAnSURBVHjaYvj//z8DEIMAAxQzMUABTAATAxYAk8QqCZdE1gkQYACxJw3qExQlLwAAAABJRU5ErkJggg==')] opacity-10"></div>
                    <div className="p-6 flex flex-col items-center">
                      <div className="text-center mb-4">
                        <h4 className="text-sm font-bold">YOUR BUSINESS</h4>
                        <p className="text-xs text-gray-600">Scan & Review</p>
                      </div>
                      <div className="w-32 h-32 border-4 border-black p-2 mx-auto mb-4">
                        <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-0.5">
                          {Array(49).fill(null).map((_, i) => (
                            <div key={i} className={`bg-black ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}></div>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-center">
                        Scan to leave a review and get {incentiveValue}{incentiveType === 'percentage' ? '%' : '$'} off your next visit!
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Phone with Customer Interface */}
                <motion.div
                  className="absolute top-[10%] right-[15%] w-40 h-72 bg-white rounded-[36px] border-8 border-gray-800 shadow-xl flex flex-col overflow-hidden z-40"
                  animate={{
                    y: activeStep === 3 ? -20 : 0,
                    opacity: activeStep === 3 ? 1 : activeStep === 2 ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-primary-600 text-white text-xs p-2 text-center">
                    Review Your Experience
                  </div>
                  <div className="flex-1 p-3">
                    <div className="space-y-2">
                      <div className="flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <div className="h-20 bg-gray-100 rounded-sm p-2">
                        <p className="text-[8px] text-gray-400">Write your review...</p>
                      </div>
                      <button className="w-full bg-primary-500 text-white text-[10px] py-1 rounded-sm">
                        Submit Review
                      </button>
                      <p className="text-[8px] text-center text-gray-500 mt-2">
                        Get {incentiveValue}{incentiveType === 'percentage' ? '%' : '$'} off your next visit!
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media Posts */}
                <motion.div
                  className="absolute top-[5%] left-[20%] w-32 h-24 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-[-5deg]"
                  animate={{
                    y: activeStep === 4 ? -15 : 0,
                    opacity: activeStep === 4 ? 1 : 0.2,
                    rotate: activeStep === 4 ? -5 : -10,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-5 bg-blue-500 flex items-center px-2">
                    <div className="w-4 h-4 rounded-full bg-white mr-1"></div>
                    <div className="h-2 w-12 bg-white rounded-full"></div>
                  </div>
                  <div className="p-2">
                    <div className="h-2 bg-gray-300 rounded-full w-full mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded-full w-3/4 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded-full w-5/6 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded-full w-2/3 mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded-full w-3/4"></div>
                  </div>
                </motion.div>

                {/* Google Review */}
                <motion.div
                  className="absolute top-[30%] left-[5%] w-28 h-20 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-[5deg]"
                  animate={{
                    y: activeStep === 4 ? -10 : 10,
                    opacity: activeStep === 4 ? 1 : 0.2,
                    rotate: activeStep === 4 ? 5 : 15,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-4 flex items-center px-1">
                    <div className="flex space-x-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-2 h-2 bg-yellow-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="h-1.5 bg-gray-300 rounded-full w-full mb-1"></div>
                    <div className="h-1.5 bg-gray-300 rounded-full w-3/4 mb-1"></div>
                    <div className="h-1.5 bg-gray-300 rounded-full w-5/6 mb-1"></div>
                    <div className="h-1.5 bg-gray-300 rounded-full w-2/3"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Step Details */}
          <div className="mt-4 md:pl-8">
            {/* Step Indicators - Desktop Only */}
            <div className="hidden md:grid grid-cols-4 gap-2 mb-8">
              {featureSteps.map((step) => (
                <motion.button
                  key={step.id}
                  className={`flex flex-col items-center ${
                    activeStep === step.id ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: activeStep === step.id ? 1 : 0.5, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: step.id * 0.1 }}
                >
                  <div className={`h-18 w-18 rounded-full flex items-center justify-center mb-2 cursor-pointer text-3xl ${
                    activeStep === step.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.id}
                  </div>

                  <span className="text-sm font-medium uppercase">{step.title.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>

            {/* Current Step Info */}
            {featureSteps.map((step) => (
              <motion.div
                key={step.id}
                className={`mt-4 ${activeStep === step.id ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-linear-to-r from-primary-500 to-accent-500 rounded-full p-3 mr-4 text-white">
                    {getIconComponent(step.icon, 24)}
                  </div>

                  <h3>{step.title}</h3>
                </div>

                <p className="text-gray-700">
                  {step.description}
                </p>

                <div className="mt-8 flex space-x-4">
                  <button
                    onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                    className="btn btn-secondary"
                    disabled={activeStep === 1}
                  >
                    Previous
                  </button>

                  <button
                    onClick={() => setActiveStep(Math.min(featureSteps.length, activeStep + 1))}
                    className="btn btn-primary"
                    disabled={activeStep === featureSteps.length}
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;