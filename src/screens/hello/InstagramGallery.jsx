import { motion } from 'framer-motion';
import { useState } from 'react';

const InstagramGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Fallback images if none provided
  const defaultImages = [
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-4">Latest from Instagram</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-medium">Click to view</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected Instagram post"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default InstagramGallery;