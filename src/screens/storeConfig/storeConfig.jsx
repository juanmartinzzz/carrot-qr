import { nanoid } from 'nanoid';
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';
import BrandColours from './BrandColours';
import { useEffect, useState } from 'react';
import LinksAndRewards from './LinksAndRewards';
import remote from '../../integrations/supabase';
import BusinessAndStoreDetails from './businessAndStoreDetails';
import GradientTextButton from '../../components/interaction/GradientTextButton';
import BlackButton from '../../components/interaction/BlackButton';

const defaultOwner = {
  brand_colour_1: '#6366F1',
  brand_colour_2: '#EC4899',
  brand_colour_3: '#8B5CF6',
}

const StoreConfig = ({ storeCode }) => {
  const [store, setStore] = useState({});
  const [owner, setOwner] = useState(defaultOwner);

  useEffect(() => {
    if (!storeCode) {
      return;
    }

    remote.store.getByCode({ code: storeCode }).then(store => {
      if (!store) {
        setStore({});
        setOwner(defaultOwner);
        return;
      }

      setStore(store);

      remote.owner.getById({ id: store.owner_id }).then(owner => {
        setOwner(owner);
      });
    });
  }, [storeCode]);

  const handleUpsertStoreAndOwner = () => {
    remote.owner.upsert({owner}).then(upsertedOwner => {
      setOwner(upsertedOwner);

      remote.store.upsert({store: {...store, code: storeCode, owner_id: upsertedOwner.id}}).then(upsertedStore => {
        setStore(upsertedStore);

        // Save store code to local storage
        localStorage.setItem('storeCode', upsertedStore.code);
      });
    });
  }

  return (
    <section className="section bg-linear-to-br from-primary-50 to-accent-50">
      <div className="container-custom max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">
            Start using our service <span className="gradient-text">TODAY</span> for FREE
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Configure your business profile and start collecting reviews in minutes
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-8 md:p-12 rounded-md shadow-lg space-y-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Business Details */}
          <BusinessAndStoreDetails owner={owner} store={store} setOwner={setOwner} setStore={setStore} />

          {/* Brand Colors */}
          <BrandColours owner={owner} setOwner={setOwner} />

          {/* Links and rewards */}
          <LinksAndRewards store={store} setStore={setStore} />

          <div className="mt-16 flex justify-center">
            <BlackButton onClick={handleUpsertStoreAndOwner}>Save</BlackButton>
          </div>
        </motion.div>


        {/* QR Code Section */}
        <motion.div
          className="bg-white p-12 rounded-3xl shadow-lg text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Your QR Code</h3>
            <p className="text-gray-600">Ready to start collecting reviews</p>
          </div>

          <div className="bg-linear-to-br from-primary-50 to-accent-50 p-8 rounded-2xl mb-8">
            <QRCode
              value={`https://carrotqr.com/${storeCode}`}
              size={256}
              level="H"
              className="mx-auto"
            />
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-gray-700 mb-2">Your unique URL:</p>
            <div className="flex justify-between gap-2 bg-gray-50 p-4 rounded-xl font-mono text-sm break-all">
              https://carrotqr.com/{storeCode}
              <GradientTextButton onClick={() => navigator.clipboard.writeText(`https://carrotqr.com/${storeCode}`)}>Copy</GradientTextButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreConfig;