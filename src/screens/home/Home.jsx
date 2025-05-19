import { nanoid } from "nanoid";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HeroSection from "../../sections/HeroSection";
import StoreConfig from "../storeConfig/storeConfig";
import SocialBanner from "../../components/SocialBanner";
import PricingSection from "../../sections/PricingSection";
import FeaturesSection from "../../sections/FeaturesSection";
import QuestionSection from "../../sections/QuestionSection";
import generatedExample from "../../assets/images/generatedExample.png";
import BlackButton from "../../components/interaction/BlackButton";

const Home = () => {
  const navigate = useNavigate();
  const { storeCodeParam } = useParams();
  const [storeCode, setStoreCode] = useState(null);
  const storeConfigRef = useRef(null);

  useEffect(() => {
    // If storeCode passed as a param, use it
    console.log({storeCodeParam});
    if(storeCodeParam) {
      console.log({storeCodeParam});
      navigate(`/hello/${storeCodeParam}`);
      setStoreCode(storeCodeParam);
      return;
    }

    // If storeCode set in local storage, use it
    const storeCodeLocalStorage = localStorage.getItem('storeCode');
    if(storeCodeLocalStorage) {
      setStoreCode(storeCodeLocalStorage);
      return;
    }

    // Generate new storeCode if not passed as a param nor set in local storage
    const newStoreCode = `CAR-${nanoid(8)}`;
    setStoreCode(newStoreCode);
    localStorage.setItem('storeCode', newStoreCode);
  }, []);

  const handleStoreCodeReset = () => {
    const newStoreCode = `CAR-${nanoid(8)}`;
    localStorage.setItem('storeCode', newStoreCode);
    setStoreCode(newStoreCode);
  }

  const scrollToStoreConfig = () => {
    storeConfigRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
        <main>
          <QuestionSection onAnswer={scrollToStoreConfig} />

          <HeroSection />

          {/* <SignupSection /> */}

          <SocialBanner />

          <div ref={storeConfigRef}>
            <StoreConfig storeCode={storeCode} />
          </div>

          <FeaturesSection />

          {/* <SecondarySignupSection /> */}

          {/* <RewardsConfigSection /> */}

          <PricingSection />

          {/* <SignupSection /> */}
        </main>

        <div className="flex justify-center items-center h-screen text-7xl">
          <img src={generatedExample} alt="logo" className="w-1/2 rounded-lg" />
        </div>

        <div className="my-8 flex justify-center">
          <BlackButton onClick={handleStoreCodeReset}>Create a new store</BlackButton>
        </div>
      </div>
    </div>
  )
}

export default Home;