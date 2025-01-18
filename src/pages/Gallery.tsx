import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Gallery = () => {
  const { t } = useTranslation();

  const categories = [
    { name: 'events', image: 'https://asset.mmm.dev/a9/aee3eb077f4b599cb71f1830ca6df7/1m1uk2i.jpg?width=512' },
    { name: 'contractor', image: 'https://asset.mmm.dev/60/0d197d3ac5499c90f2bef5cbcc0a90/190i9u1.jpg?width=512' },
    { name: 'weddings', image: 'https://asset.mmm.dev/d3/8128b86e2f4e908ab5f79d7f159d4f/1yw248b.png?width=512' },
    { name: 'concerts', image: 'https://asset.mmm.dev/ed/a688025bdd4b779955835aac155e6e/5uttmw.jpg?width=512' },
    { name: 'personal', image: 'https://asset.mmm.dev/b9/0a73769e9f411abf90cf96fac66fe4/v4sdm0.jpg?width=512' },
    { name: 'brand', image: 'https://asset.mmm.dev/d4/c567a3f64c48d7843f8bcd9699b8fb/2rw8s3.jpg?width=512' },
    { name: 'residence', image: 'https://asset.mmm.dev/fc/9e3f4367ba419ebe7a799210a948ae/zieoil.jpg?width=512' },
    { name: 'brandStudio', image: 'https://asset.mmm.dev/40/a238ce90e34a9e8ae5a0878ac3898d/1wqhg37.jpg?width=512' },
    { name: 'studio', image: 'https://asset.mmm.dev/ab/2765e95555495da32b0412da4d9e33/1ff4qti.jpg?width=512' },
    { name: 'polaroid', image: 'https://asset.mmm.dev/a8/bb39f315cc4a34a6071907af4b6c2b/17hh0uy.jpg?width=256' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={`${category.image}?auto=format&fit=crop&w=800&q=80`}
                alt={t(`gallery.${category.name}`)}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {t(`gallery.${category.name}`)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};