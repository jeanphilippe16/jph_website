import React from 'react';
import { motion } from 'framer-motion';

export const Home = () => {
  const images = Array(6).fill('https://images.unsplash.com/photo-1542038784456-1ea8e935640e');

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={`${image}?auto=format&fit=crop&w=800&q=80`}
                alt={`Photography ${index + 1}`}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};