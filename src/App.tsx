import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import SocialBanner from './components/SocialBanner';
import SignupSection from './sections/SignupSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import RewardsConfigSection from './sections/RewardsConfigSection';
import SecondarySignupSection from './sections/SecondarySignupSection';
import Footer from './components/Footer';
import generatedExample from './assets/images/generatedExample.png';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <SignupSection />
          <SocialBanner />
          <FeaturesSection />
          <SecondarySignupSection />
          <PricingSection />
          <RewardsConfigSection />
          <SignupSection />
        </main>

        <div className="flex justify-center items-center h-screen text-7xl">
          <img src={generatedExample} alt="logo" className="w-1/2" />
        </div>

        {/* Temp thing for presentation */}
        <div className="flex justify-center items-center h-screen text-7xl">
          <div style={{ textAlign: 'center' }}>
            <span>please be really</span>
            <span style={{ margin: '0 6px', background: 'linear-gradient(90deg, #6a11cb, #2575fc)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 'bold' }}>mean</span>
            <span>I</span>
            <span style={{ margin: '0 6px', background: 'linear-gradient(90deg, #6a11cb, #2575fc)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 'bold' }}>mean</span>
            <span>it</span>
          </div>
        </div>


        <Footer />
      </div>
    </Router>
  );
}

export default App;