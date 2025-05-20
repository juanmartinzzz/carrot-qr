import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../sections/HeroSection";
import StoreConfig from "../storeConfig/storeConfig";
import SocialBanner from "../../components/SocialBanner";
import { useNavigate, useParams } from "react-router-dom";
import PricingSection from "../../sections/PricingSection";
import FeaturesSection from "../../sections/FeaturesSection";
import QuestionSection from "../../sections/QuestionSection";
import BlackButton from "../../components/interaction/BlackButton";
import generatedExample from "../../assets/images/generatedExample.png";
import QuickHowItWorksSection from "../../sections/QuickHowItWorksSection";

const Home = () => {
  const navigate = useNavigate();
  const { storeCodeParam } = useParams();
  const [storeCode, setStoreCode] = useState(null);

  useEffect(() => {
    // If storeCode passed as a param, use it
    if(storeCodeParam) {
      navigate(`/hello/${storeCodeParam}`);
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

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
        <main>
          <QuestionSection />

          <HeroSection />

          <SocialBanner />

          <QuickHowItWorksSection />

          <StoreConfig storeCode={storeCode} />

          <FeaturesSection />

          <PricingSection />
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