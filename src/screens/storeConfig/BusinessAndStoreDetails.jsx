import { useState } from "react";
import InputText from "../../components/interaction/InputText";
import OutlineButton from "../../components/interaction/OutlineButton";

const countryAndStateMap = {
  'United States': ['California', 'New York', 'Texas', 'Florida', 'Illinois', 'Ohio', 'Michigan', 'Pennsylvania', 'Georgia', 'North Carolina'],
  'Canada': ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Prince Edward Island', 'Newfoundland and Labrador'],
  'Spain': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma de Mallorca', 'Bilbao', 'Vigo'],
};

const BusinessAndStoreDetails = ({ owner, store, setOwner, setStore }) => {
  const [shouldShowMore, setShouldShowMore] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <InputText label="Owner Email" value={owner.email} onChange={({target}) => setOwner({ ...owner, email: target.value })} placeholder="pedrom@gmail.com" />
        <InputText label="Company Name" value={owner.company_name} onChange={({target}) => setOwner({ ...owner, company_name: target.value })} placeholder="Pedro Martínez" />
        <InputText label="Store Address" value={store.address} onChange={({target}) => setStore({ ...store, address: target.value })} placeholder="Calle de la Princesa 123, Madrid" />
      </div>

      <div className="text-center mt-4">
        <OutlineButton onClick={() => setShouldShowMore(!shouldShowMore)}>
          {shouldShowMore ? 'Show less' : 'Add more details'}
        </OutlineButton>
      </div>

      {shouldShowMore && (
        <div className="grid grid-cols-2 gap-4">
          <InputText label="Owner Name" value={owner.name} onChange={({target}) => setOwner({ ...owner, name: target.value })} placeholder="Pedro Martínez" />
          <InputText label="Owner Phone" value={owner.phone} onChange={({target}) => setOwner({ ...owner, phone: target.value })} placeholder="+54 9 11 3333 4444" />
          <InputText label="Store Country" value={store.country} onChange={({target}) => setStore({ ...store, country: target.value })} placeholder="Spain" />
          <InputText label="Store State" value={store.state} onChange={({target}) => setStore({ ...store, state: target.value })} placeholder="Madrid" />
        </div>
      )}
    </div>
  );
};

export default BusinessAndStoreDetails;