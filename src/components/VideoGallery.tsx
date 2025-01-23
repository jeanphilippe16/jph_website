import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const VideoGallery = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    'https://player.vimeo.com/video/367512707',
    'https://player.vimeo.com/video/369161837',
    'https://player.vimeo.com/video/374265101',
    'https://player.vimeo.com/video/381244562',
    'https://player.vimeo.com/video/383189368',
    'https://player.vimeo.com/video/384085609',
    'https://player.vimeo.com/video/386386337',
    'https://player.vimeo.com/video/387108375',
    'https://player.vimeo.com/video/388773824',
    'https://player.vimeo.com/video/389496607',
    'https://player.vimeo.com/video/390876189'
  ];

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <iframe
              src={`${video}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${selectedVideo}?autoplay=1&byline=0&title=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};