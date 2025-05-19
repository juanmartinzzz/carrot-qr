import { useNavigate, useParams } from "react-router-dom";
import remote from "../../integrations/supabase";

// store.google_maps_url and store.instagram_url are to be displayed in this screen

const Hello = () => {
  const navigate = useNavigate();
  const { storeCodeParam } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    if (!storeCodeParam) {
      navigate('/');
    }

    remote.store.getByCode(storeCodeParam).then((store) => {
      setStore(store);
    });
  }, [storeCodeParam]);

  return (
    <div>Hello</div>
  );
};

export default Hello;