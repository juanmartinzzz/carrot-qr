import { motion } from 'framer-motion';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const BrandColours = ({ owner, setOwner }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(null);

  const handleColorChange = (colour) => {
    console.log({colour});

    setOwner({
      ...owner,
      [`brand_colour_${activeColorIndex}`]: colour,
    });
    setActiveColorIndex(null);
  };

  return (
    <div className="flex items-start gap-4">
      <label className="block text-lg font-medium mb-4">Brand Colours</label>

      <div className="flex gap-6">
        <motion.button
          className="group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveColorIndex(1)}
        >
          <div
            style={{ backgroundColor: owner.brand_colour_1 }}
            className={`w-16 h-16 rounded-2xl shadow-lg cursor-pointer`}
          />

          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded-full">
            Colour 1
          </div>
        </motion.button>

        <motion.button
          className="group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveColorIndex(2)}
        >
          <div
            style={{ backgroundColor: owner.brand_colour_2 }}
            className={`w-16 h-16 rounded-2xl shadow-lg cursor-pointer`}
          />

          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded-full">
            Colour 2
          </div>
        </motion.button>

        <motion.button
          className="group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveColorIndex(3)}
        >
          <div
            style={{ backgroundColor: owner.brand_colour_3 }}
            className={`w-16 h-16 rounded-2xl shadow-lg cursor-pointer`}
          />

          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded-full">
            Colour 3
          </div>
        </motion.button>

      </div>

      {activeColorIndex !== null && (
        <div>
          <HexColorPicker
            color={owner[`brand_colour_${activeColorIndex}`]}
            onChange={handleColorChange}
          />
        </div>
      )}
    </div>
  );
};

export default BrandColours;