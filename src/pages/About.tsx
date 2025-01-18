import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Camera className="w-16 h-16 mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-8">1966 Visuals</h1>
          <p className="text-xl leading-relaxed text-gray-300">{t('about.text')}</p>
        </motion.div>
      </div>
    </div>
  );
};