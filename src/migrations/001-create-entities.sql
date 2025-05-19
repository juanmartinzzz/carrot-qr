-- Table names prefix: "carrot_"
DROP TABLE IF EXISTS carrot_owner CASCADE;
DROP TABLE IF EXISTS carrot_store CASCADE;
DROP FUNCTION IF EXISTS carrot_update_updated_at_column CASCADE;

-- Create owners table for supabase
CREATE TABLE carrot_owner (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    full_name TEXT,
    email VARCHAR(255),
    phone TEXT,
    company_name VARCHAR(255),
    brand_colour_1 TEXT,
    brand_colour_2 TEXT,
    brand_colour_3 TEXT,
    deleted_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create supabase function for updated at value to be updated on each update
CREATE OR REPLACE FUNCTION carrot_update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create supabase trigger for updated at value to be updated on each update
CREATE TRIGGER carrot_update_owner_updated_at_trigger
BEFORE UPDATE ON carrot_owner
FOR EACH ROW
EXECUTE FUNCTION carrot_update_updated_at_column();

-- Create stores table
CREATE TABLE carrot_store (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES carrot_owner(id),
    code VARCHAR(255),
    name VARCHAR(255),
    address TEXT,
    state VARCHAR(255),
    country VARCHAR(255),
    google_maps_url TEXT,
    instagram_url TEXT,
    x_url TEXT,
    google_maps_reward TEXT,
    instagram_reward TEXT,
    x_reward TEXT,
    deleted_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create supabase trigger for updated at value to be updated on each update
CREATE TRIGGER carrot_update_store_updated_at_trigger
BEFORE UPDATE ON carrot_store
FOR EACH ROW
EXECUTE FUNCTION carrot_update_updated_at_column();