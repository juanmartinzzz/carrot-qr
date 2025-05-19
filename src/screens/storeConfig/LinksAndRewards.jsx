import LinkReward from "./LinkReward";
import LinkTutorial from "./LinkTutorual";
import InputText from "../../components/interaction/InputText";
import { SiGoogle, SiInstagram } from "@icons-pack/react-simple-icons";
import tutorialInstagram1 from '../../assets/images/tutorialInstagram1.png';
import tutorialInstagram2 from '../../assets/images/tutorialInstagram2.png';
import tutorialGoogleMapsOption1 from '../../assets/images/tutorialGoogleMapsOption1.png';
import tutorialGoogleMapsOption2 from '../../assets/images/tutorialGoogleMapsOption2.png';

const LinksAndRewards = ({ store, setStore }) => {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <InputText
          value={store.google_maps_url}
          label={<div className="flex items-center gap-2"><SiGoogle size={24} className="text-primary-500" /> Google Maps url</div>}
          onChange={({target}) => setStore({ ...store, google_maps_url: target.value })} placeholder="https://www.google.com/maps/place/Your+Business+Name"
        />

        {/* Expandable tutorial on best practices to share link to your business on Google Maps */}
        <div className="mt-4">
          <LinkTutorial showButtonText="How to find your Google Maps link" sections={[{
            content: ['Option A', '1. Find your store on Google Maps', '2. Click on the "Share" button', '3. Copy the link'],
            image: tutorialGoogleMapsOption1
          }, {
            content: ['Option B', '1. Access your Google Business Profile.', '2. Look for the "Ask for reviews" option.', '3. Copy the link'],
            image: tutorialGoogleMapsOption2
          }]} />
        </div>

        <div className="mt-4">
          <LinkReward propertyName="google_maps_reward" store={store} setStore={setStore} enableButtonText="Reward customers for leaving a Google Maps review" />
        </div>
      </div>

      <div>
        <InputText
          label={<div className="flex items-center gap-2"><SiInstagram size={24} className="text-primary-500" /> Instagram url</div>}
          value={store.instagram_url}
          onChange={({target}) => setStore({ ...store, instagram_url: target.value })}
          placeholder="https://www.instagram.com/your_business_name"
        />

        {/* Expandable tutorial on best practices to share link to your business on Google Maps */}
        <div className="mt-4">
          <LinkTutorial showButtonText="How to find your Instagram link" sections={[{
            content: ['1. Go to Instagram.', '2. Click on your profile circle at the bottom right of the screen.'],
            image: tutorialInstagram1
          }, {
            content: ['3. Find your @ (aka nickname or handle) at the top of the screen.', '4. Write or paste your handle here.'],
            image: tutorialInstagram2
          }]} />
        </div>

        <div className="mt-4">
          <LinkReward propertyName="instagram_reward" store={store} setStore={setStore} enableButtonText="Reward customers for leaving an Instagram review" />
        </div>
      </div>
    </div>
  );
};

export default LinksAndRewards;