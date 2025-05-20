import { motion } from 'framer-motion';
import { HashLink } from '../components/HashLink';
import { Heart, Laptop, Printer, Users } from 'lucide-react';
import qrCarrotLogo from '../assets/images/qrCarrotLogo.png';
import BlackButton from '../components/interaction/BlackButton';

{/* Section explaining in a SUPER quick and clear way how our service works, by letting the User know they have to 1. Perform very quick configuration and 2. Print a QR code to display on their store. That's it! After this, all that is needed is to tell people to review the business, follow or mention on Instagram and point them to the QR code. */}
const QuickHowItWorksSection = () => {
  const panels = [
    {
      icon: Laptop,
      title: "Tell Us About Your Business",
      description: "Just a sec... Adding my socials and biz name!",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      delay: 0,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Business owner setting up their profile"
    },
    {
      icon: Printer,
      title: "Print Your QR",
      description: "Ready to roll! Gonna put this where everyone can see it!",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageAlt: "QR code being printed and displayed"
    },
    {
      icon: Heart,
      title: "Get Support & Give Rewards",
      description: "Oh cool, I get 10% off for following!",
      color: "bg-green-100",
      iconColor: "text-green-600",
      delay: 0.4,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center font-black text-5xl transform -rotate-12 shadow-lg z-50">
                {index + 1}
              </div>

              {/* Image with overlay */}
              <div className="relative h-48 mb-6 rounded-sm overflow-hidden">
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

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{panel.title}</h3>

              {/* Description in speech bubble */}
              <div className="relative bg-white/90 rounded-sm p-4 shadow-sm">
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/90 transform rotate-45" />
                <p className="text-gray-700">{panel.description}</p>
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