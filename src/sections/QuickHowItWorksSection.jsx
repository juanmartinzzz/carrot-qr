import { motion } from 'framer-motion';
import { HashLink } from '../components/HashLink';
import { Heart, Laptop, Printer, Users } from 'lucide-react';
import qrCarrotLogo from '../assets/images/qrCarrotLogo.png';
import BlackButton from '../components/interaction/BlackButton';
import stepsToGetQRCode1 from '../assets/images/stepsToGetQRCode1.png';
import stepsToGetQRCode2 from '../assets/images/stepsToGetQRCode2.png';
import stepsToGetQRCode3 from '../assets/images/stepsToGetQRCode3.png';

{/* Section explaining in a SUPER quick and clear way how our service works, by letting the User know they have to 1. Perform very quick configuration and 2. Print a QR code to display on their store. That's it! After this, all that is needed is to tell people to review the business, follow or mention on Instagram and point them to the QR code. */}
const QuickHowItWorksSection = () => {
  const panels = [
    {
      icon: Laptop,
      title: "Tell us about your business",
      description: "Just a sec... adding my socials and biz name!",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      delay: 0,
      image: stepsToGetQRCode1,
      imageAlt: "Business owner setting up their profile"
    },
    {
      icon: Printer,
      title: "Print your QR and place it near your cash register",
      description: "Ready to roll! Gonna put this where everyone can see it!",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      delay: 0.2,
      image: stepsToGetQRCode2,
      imageAlt: "QR code being printed and displayed"
    },
    {
      icon: Heart,
      title: "Get support & give rewards",
      description: "Oh cool, I get 10% off for mentioning on insta!",
      color: "bg-green-100",
      iconColor: "text-green-600",
      delay: 0.4,
      image: stepsToGetQRCode3,
      imageAlt: "Happy customers scanning QR code"
    }
  ];

  return (
    <section id="quick-how-it-works" className="py-20">
      <div className="container-custom">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img src={qrCarrotLogo} alt="Carrot QR Logo" className="absolute top-0 right-0 w-12 opacity-70 rotate-12" />
          </div>
          <span className="relative z-10">This is how you can get more reviews and mentions for your business with Carrot QR</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              className={`relative rounded-sm p-8 ${panel.color} shadow-lg hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: panel.delay }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Comic-style frame */}
              <div className="absolute inset-0 border-4 border-black/10 rounded-sm" />

              {/* Large Panel number */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-black text-white rounded-full flex items-center justify-center font-black text-4xl transform -rotate-12 shadow-lg z-50">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center">{panel.title}</h3>

              {/* Description in speech bubble */}
              <div className="mt-4 relative bg-white rounded-sm p-4 shadow-sm">
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45" />
                <p className="text-gray-700">{panel.description}</p>
              </div>

              {/* Image with overlay */}
              <div className="mt-4 relative h-48 rounded-sm overflow-hidden">
                <motion.img
                  src={panel.image}
                  alt={panel.imageAlt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <panel.icon className={`w-8 h-8 ${panel.iconColor} bg-white/90 p-1.5 rounded-sm shadow-lg`} />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <HashLink to="#store-config">
            <BlackButton>
              Let's do this!
            </BlackButton>
          </HashLink>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickHowItWorksSection;