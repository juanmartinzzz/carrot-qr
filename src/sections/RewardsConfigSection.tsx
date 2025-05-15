import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Instagram, Star, MapPin, Twitter } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';
import QRCode from 'react-qr-code';
import { nanoid } from 'nanoid';

interface RewardEntry {
  id: string;
  platform: string;
  incentiveType: string;
  amount: number;
}

const platforms = ['Google Maps', 'Instagram', 'X'];
const incentiveTypes = ['Discount', 'Cash', 'Custom'];

const defaultBrandColors = ['#6366F1', '#EC4899', '#8B5CF6'];

const PlatformIcon: React.FC<{ platform: string }> = ({ platform }) => {
  switch (platform) {
    case 'Google Maps':
      return <MapPin className="w-5 h-5" />;
    case 'Instagram':
      return <Instagram className="w-5 h-5" />;
    case 'X':
      return <Twitter className="w-5 h-5" />;
    default:
      return <Star className="w-5 h-5" />;
  }
};

const RewardsConfigSection: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [brandColors, setBrandColors] = useState(defaultBrandColors);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
  const [rewards, setRewards] = useState<RewardEntry[]>([
    { id: nanoid(), platform: 'Google Maps', incentiveType: 'Discount', amount: 5 },
    { id: nanoid(), platform: 'Instagram', incentiveType: 'Discount', amount: 10 }
  ]);
  const [uniqueId] = useState(() => nanoid(10));

  const handleColorChange = (color: string) => {
    if (activeColorIndex !== null) {
      const newColors = [...brandColors];
      newColors[activeColorIndex] = color;
      setBrandColors(newColors);
    }
  };

  const addReward = () => {
    if (rewards.length < 3) {
      setRewards([...rewards, { 
        id: nanoid(),
        platform: platforms[0],
        incentiveType: incentiveTypes[0],
        amount: 5
      }]);
    }
  };

  const removeReward = (id: string) => {
    setRewards(rewards.filter(reward => reward.id !== id));
  };

  const updateReward = (id: string, field: keyof RewardEntry, value: string | number) => {
    setRewards(rewards.map(reward => 
      reward.id === id ? { ...reward, [field]: value } : reward
    ));
  };

  return (
    <section className="section bg-gradient-to-br from-primary-50 to-accent-50">
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
          className="bg-white p-8 md:p-12 rounded-3xl shadow-lg space-y-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Business Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-lg font-medium mb-2">Business Details</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full mb-4 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-primary-500 px-0 rounded-none"
                placeholder="Company Name"
              />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-primary-500 px-0 rounded-none"
                placeholder="Store Address"
              />
            </div>

            {/* Brand Colors */}
            <div>
              <label className="block text-lg font-medium mb-4">Brand Colors</label>
              <div className="flex gap-6">
                {brandColors.map((color, index) => (
                  <motion.button
                    key={index}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveColorIndex(index === activeColorIndex ? null : index)}
                  >
                    <div 
                      className={`w-16 h-16 rounded-2xl shadow-lg cursor-pointer transition-transform ${
                        activeColorIndex === index ? 'ring-4 ring-primary-200' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded-full">
                      Color {index + 1}
                    </div>
                  </motion.button>
                ))}
              </div>
              {activeColorIndex !== null && (
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <HexColorPicker
                    color={brandColors[activeColorIndex]}
                    onChange={handleColorChange}
                  />
                </motion.div>
              )}
            </div>
          </div>

          {/* Customer Rewards */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <label className="text-lg font-medium">Customer Rewards</label>
              {rewards.length < 3 && (
                <motion.button
                  onClick={addReward}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus size={18} />
                  <span>Add Reward</span>
                </motion.button>
              )}
            </div>
            
            <div className="space-y-6">
              {rewards.map((reward, index) => (
                <motion.div 
                  key={reward.id} 
                  className="bg-gray-50 p-6 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Platform</label>
                      <div className="flex flex-wrap gap-2">
                        {platforms.map(platform => (
                          <button
                            key={platform}
                            onClick={() => updateReward(reward.id, 'platform', platform)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                              reward.platform === platform 
                                ? 'bg-primary-500 text-white' 
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <PlatformIcon platform={platform} />
                            <span>{platform}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-end gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Type</label>
                        <div className="flex flex-wrap gap-2">
                          {incentiveTypes.map(type => (
                            <button
                              key={type}
                              onClick={() => updateReward(reward.id, 'incentiveType', type)}
                              className={`px-4 py-2 rounded-full transition-colors ${
                                reward.incentiveType === type 
                                  ? 'bg-accent-500 text-white' 
                                  : 'bg-white text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="w-24">
                        <label className="block text-sm font-medium mb-2">Amount</label>
                        <input
                          type="number"
                          value={reward.amount}
                          onChange={(e) => updateReward(reward.id, 'amount', Number(e.target.value))}
                          className="w-full text-center border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-accent-500 px-0 rounded-none"
                          min="0"
                        />
                      </div>
                      
                      <motion.button
                        onClick={() => removeReward(reward.id)}
                        className="text-gray-400 hover:text-error-500 p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
          
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl mb-8">
            <QRCode
              value={`https://carrotqr.com/welcome/${uniqueId}`}
              size={256}
              level="H"
              className="mx-auto"
            />
          </div>
          
          <div className="text-left">
            <p className="text-sm font-medium text-gray-700 mb-2">Your unique URL:</p>
            <div className="bg-gray-50 p-4 rounded-xl font-mono text-sm break-all">
              https://carrotqr.com/welcome/{uniqueId}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RewardsConfigSection;