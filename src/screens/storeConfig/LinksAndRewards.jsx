import LinkTutorial from "./LinkTutorual";
import { SiGoogle, SiInstagram } from "@icons-pack/react-simple-icons";
import InputText from "../../components/interaction/InputText";
import LinkReward from "./LinkReward";

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
          <LinkTutorial showButtonText="How to share your business on Google Maps" sections={[{
            content: 'Text',
            image: 'https://placehold.co/400x600'
          }, {
            content: 'Text',
            image: 'https://placehold.co/400x600'
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
          <LinkTutorial showButtonText="How to share your business on Instagram" sections={[{
            content: 'Text',
            image: 'https://placehold.co/400x600'
          }, {
            content: 'Text',
            image: 'https://placehold.co/400x600'
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