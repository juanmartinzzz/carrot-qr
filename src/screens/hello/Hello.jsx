import { useEffect, useState } from "react";
import remote from "../../integrations/supabase";
import { useNavigate, useParams } from "react-router-dom";

// store.google_maps_url and store.instagram_url are to be displayed in this screen
// owner.brand_colour_1, owner.brand_colour_2, owner.brand_colour_3 are to be used as the background colour of the screen

const Hello = () => {
  const navigate = useNavigate();
  const { storeCodeParam } = useParams();
  const [store, setStore] = useState(null);
  const [owner, setOwner] = useState(null);

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

  return (
    <div>Hello</div>
  );
};

export default Hello;