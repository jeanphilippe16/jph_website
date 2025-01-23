import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export const ImageGallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    'events', 'contractor', 'weddings', 'concerts', 'personal',
    'brand', 'residence', 'brandStudio', 'studio', 'polaroid'
  ];

  const categoryPhotos = {
    events: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
      'https://images.unsplash.com/photo-1472653431158-6364773b2a56',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4',
      'https://images.unsplash.com/photo-1496024840928-4c417adf211d',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87'
    ],
    contractor: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
      'https://images.unsplash.com/photo-1581092162384-8987c1d64926',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
      'https://images.unsplash.com/photo-1581092160607-ee67df11c6d0',
      'https://images.unsplash.com/photo-1581092127687-b6c3a11f3b98',
      'https://images.unsplash.com/photo-1581092068079-7e14d2b8b0f3',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837'
    ],
    weddings: [
      'https://images.unsplash.com/photo-1519741497674-611481863552',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf'
    ],
    concerts: [
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b'
    ],
    personal: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ],
    brand: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      'https://images.unsplash.com/photo-1505022610485-0249ba5b3675',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1472289065668-ce650ac443d2',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      'https://images.unsplash.com/photo-1505022610485-0249ba5b3675',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1472289065668-ce650ac443d2',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      'https://images.unsplash.com/photo-1505022610485-0249ba5b3675'
    ],
    residence: [
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1494526585095-c41746248156',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1494526585095-c41746248156',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
    ],
    brandStudio: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4',
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4',
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'
    ],
    studio: [
      'https://images.unsplash.com/photo-1554941829-202a0b2403b8',
      'https://images.unsplash.com/photo-1554941426-a965fb2b9258',
      'https://images.unsplash.com/photo-1554941068-7159c2c55844',
      'https://images.unsplash.com/photo-1554941426-a965fb2b9258',
      'https://images.unsplash.com/photo-1554941829-202a0b2403b8',
      'https://images.unsplash.com/photo-1554941426-a965fb2b9258',
      'https://images.unsplash.com/photo-1554941068-7159c2c55844',
      'https://images.unsplash.com/photo-1554941426-a965fb2b9258',
      'https://images.unsplash.com/photo-1554941829-202a0b2403b8',
      'https://images.unsplash.com/photo-1554941426-a965fb2b9258'
    ],
    polaroid: [
      'https://images.unsplash.com/photo-1526045478516-99145907023c',
      'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9',
      'https://images.unsplash.com/photo-1526045431048-f857369baa09',
      'https://images.unsplash.com/photo-1526045478516-99145907023c',
      'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e',
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9',
      'https://images.unsplash.com/photo-1526045431048-f857369baa09',
      'https://images.unsplash.com/photo-1526045478516-99145907023c',
      'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e'
    ]
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {!selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={`${categoryPhotos[category][0]}?auto=format&fit=crop&w=800&q=80`}
                alt={t(`gallery.${category}`)}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4 mb-4">
                  {t(`gallery.${category}`)}
                </h3>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <span>{t('gallery.seeMore')}</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-8 text-white hover:text-gray-300 transition-colors flex items-center"
          >
            ← Retour aux catégories
          </button>
          <h2 className="text-3xl font-bold text-white mb-8">{t(`gallery.${selectedCategory}`)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryPhotos[selectedCategory].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick(photo)}
              >
                <img
                  src={`${photo}?auto=format&fit=crop&w=800&q=80`}
                  alt={`${t(`gallery.${selectedCategory}`)} ${index + 1}`}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
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
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={`${selectedImage}?auto=format&fit=contain&w=1920&h=1080&q=80`}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};