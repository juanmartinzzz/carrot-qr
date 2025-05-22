import ReviewForm from "./ReviewForm";
import SocialCard from "./SocialCard";
import ReadableText from "./ReadableText";
import { useEffect, useState } from "react";
import remote from "../../integrations/supabase";
import InstagramGallery from "./InstagramGallery";
import { HashLink } from "../../components/HashLink";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { SiGoogle, SiInstagram } from "@icons-pack/react-simple-icons";
import ctaGoogleReview1 from "../../assets/images/ctaGoogleReview1.png";
import ctaGoogleReview2 from "../../assets/images/ctaGoogleReview2.png";
import ctaGoogleReview3 from "../../assets/images/ctaGoogleReview3.png";
import ctaGoogleReview4 from "../../assets/images/ctaGoogleReview4.png";
import ctaGoogleReview5 from "../../assets/images/ctaGoogleReview5.png";
import ctaFollowOnInsta from "../../assets/images/ctaFollowOnInsta.png";


// store.google_maps_url and store.instagram_url are to be displayed in this screen
// owner.brand_colour_1, owner.brand_colour_2, owner.brand_colour_3 are to be used as the background colour of the screen

const Hello = () => {
  const navigate = useNavigate();
  const { storeCodeParam } = useParams();
  const [store, setStore] = useState(null);
  const [owner, setOwner] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [activeSection, setActiveSection] = useState('stats');

  const brandColors = owner ? [owner.brand_colour_1, owner.brand_colour_2, owner.brand_colour_3] : ['#ffffff', '#ffffff', '#ffffff'];

  const stats = [
    { value: '0.1 to 0.5', label: 'Rating increase!' },
    { value: '1.2k', label: 'Happy Customers' },
    { value: '500+', label: 'Reviews' },
    { value: '98%', label: 'Would Recommend' }
  ];

  useEffect(() => {
    if (!storeCodeParam) {
      navigate('/');
    }

    remote.store.getByCode({code: storeCodeParam}).then((store) => {
      setStore(store);

      remote.owner.getById({id: store.owner_id}).then((owner) => {
        setOwner(owner);
      });
    });
  }, [storeCodeParam]);

  if (!store || !owner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  const handleReviewSubmit = (reviewData) => {
    console.log('Review submitted:', reviewData);
    window.open(store.google_maps_url, '_blank');
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <AnimatedBackground brandColors={brandColors} /> */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ReadableText
              type="h1"
              brandColors={brandColors}
              className="mb-8 text-6xl md:text-8xl font-black tracking-tighter"
              variant="solid"
            >
              Support <span className="text-shadow-md text-shadow-white" style={{ color: brandColors[0] }}>Local</span>,
              <br />
              Make a <span className="text-shadow-md text-shadow-white" style={{ color: brandColors[1] }}>Difference</span>!
            </ReadableText>

            <ReadableText
              type="p"
              brandColors={brandColors}
              className="max-w-3xl mx-auto text-xl md:text-2xl font-light"
              delay={0.4}
              variant="solid"
            >
              Every review, follow, and share helps this amazing local business compete with the big guys.
              Your support means the world to them!
            </ReadableText>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <HashLink to="#stats">
                <button
                  onClick={() => setActiveSection('stats')}
                  className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Let's make an impact
                </button>
              </HashLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatePresence>
        {activeSection === 'stats' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
            id="stats"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <SocialCard
                  title="We thrive on honest reviews you leave us on Google"
                  description="Share your experience and help others discover this amazing place!"
                  icon={SiGoogle}
                  imageUrl={ctaGoogleReview5}
                  link={store.google_maps_url}
                  onHover={(isHovered) => setHoveredCard(isHovered ? 'google' : null)}
                  isHovered={hoveredCard === 'google'}
                  rotation={1}
                  brandColors={brandColors}
                  reward={store.google_maps_reward}
                />

                <SocialCard
                  title="Telling your crew about us is the best kind of support we can get"
                  description="Stay connected, support us, and be the first to know about special offers and updates!"
                  icon={SiInstagram}
                  imageUrl={ctaFollowOnInsta}
                  link={store.instagram_url}
                  onHover={(isHovered) => setHoveredCard(isHovered ? 'instagram' : null)}
                  isHovered={hoveredCard === 'instagram'}
                  rotation={-1}
                  brandColors={brandColors}
                  reward={store.instagram_reward}
                />
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Gallery Section */}
      <AnimatePresence>
        {activeSection === 'gallery' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative py-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* <GlassCard brandColors={brandColors} className="mb-8"> */}
                <InstagramGallery />
              {/* </GlassCard> */}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Review Section */}
      <AnimatePresence>
        {activeSection === 'review' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative py-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* <GlassCard brandColors={brandColors}> */}
                <ReviewForm onSubmit={handleReviewSubmit} />
              {/* </GlassCard> */}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-4 bg-black/80 backdrop-blur-lg p-4 rounded-sm">
          {['hero', 'stats', 'gallery', 'review'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === section
                  ? 'text-white bg-white/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <footer className="relative py-12 text-center">
        <ReadableText
          type="p"
          brandColors={brandColors}
          className="mb-4 text-sm"
          variant="solid"
        >
          Don't forget to tag us in your posts and stories!
        </ReadableText>
        <ReadableText
          type="h3"
          brandColors={brandColors}
          className="font-medium text-lg"
          variant="solid"
        >
          Thank you so much! Every share counts. 🌟
        </ReadableText>
      </footer>
    </motion.div>
  );
};

export default Hello;