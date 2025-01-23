import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { ImageGallery } from '../components/ImageGallery';
import { VideoGallery } from '../components/VideoGallery';

export const Gallery = () => {
  const { t } = useTranslation();
  const [section, setSection] = useState<'images' | 'videos'>('images');

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Section Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-1 rounded-lg">
            <button
              onClick={() => setSection('images')}
              className={`px-6 py-2 rounded-md transition-colors ${
                section === 'images'
                  ? 'bg-yellow-500 text-black'
                  : 'text-white hover:text-yellow-500'
              }`}
            >
              {t('gallery.images')}
            </button>
            <button
              onClick={() => setSection('videos')}
              className={`px-6 py-2 rounded-md transition-colors ${
                section === 'videos'
                  ? 'bg-yellow-500 text-black'
                  : 'text-white hover:text-yellow-500'
              }`}
            >
              {t('gallery.videos')}
            </button>
          </div>
        </div>

        {/* Content */}
        {section === 'images' ? <ImageGallery /> : <VideoGallery />}
      </div>
    </div>
  );
};