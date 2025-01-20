import React from 'react';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="fixed inset-0 bg-black">
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://asset.mmm.dev/ab/c4c5a85e434711839010672c718df1/zu2mas.jpg?width=512',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Content overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h1 className="text-6xl font-bold mb-6">1966 Visuals</h1>
        <p className="text-xl max-w-2xl">
          Capturing moments, creating memories, telling stories through the lens
        </p>
      </motion.div>
    </div>
  );
};