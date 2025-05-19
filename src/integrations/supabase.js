// Get supabase client
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

const remote = {
  owner: {
    upsert: async ({owner}) => {
      const existingOwner = (owner.id) ? await remote.owner.getById({id: owner.id}) : {};

      const defaultValues = {}

      const dataToUpsert = {
        ...defaultValues,
        ...existingOwner,
        ...owner,
      }

      try {
        const { data, error } = await supabaseClient.from('carrot_owner').upsert(dataToUpsert, {
          onConflict: 'id'
        }).select().single();
        if (error) throw error;

        return data;
      } catch (error) {
        console.error('Error upserting owner:', error);
      }
    },
    getById: async ({id}) => {
      try {
        const { data, error } = await supabaseClient.from('carrot_owner').select('*').eq('id', id).single();
        if (error) throw error;

        return data;
      } catch (error) {
        console.error('Error getting owner by id:', error);
      }
    },
  },
  store: {
    upsert: async ({store}) => {
      try {
        const { data, error } = await supabaseClient.from('carrot_store').upsert(store, {
          onConflict: 'id'
        }).select().single();
        if (error) throw error;

        return data;
      } catch (error) {
        console.error('Error upserting store:', error);
        throw error;
      }
    },
    upsertWithOwner: async ({store, owner}) => {
      const newOrCurrentOwner = (!store.owner_id) ? await remote.owner.upsert({owner}) : await remote.owner.getById({id: store.owner_id});

      const dataToUpsert = {
        ...store,
        owner_id: newOrCurrentOwner.id, // <-- hmmmmmm
      }

      return await remote.store.upsert({store: dataToUpsert});
    },
    getById: async ({id}) => {
      try {
        const { data, error } = await supabaseClient.from('carrot_store').select('*').eq('id', id).single();
        if (error) throw error;

        return data;
      } catch (error) {
        console.error('Error getting store by id:', error);
      }
    },
    getByCode: async ({code}) => {
      try {
        const { data, error } = await supabaseClient.from('carrot_store').select('*').eq('code', code).single();
        if (error) throw error;

        return data;
      } catch (error) {
        console.error('Error getting store by code:', error);
      }
    }
  },
};

export default remote;