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
      'https://asset.mmm.dev/a9/aee3eb077f4b599cb71f1830ca6df7/1m1uk2i.jpg?width=512',
      'https://asset.mmm.dev/53/104ca974e34af7953467749d9f37aa/324ojx.jpg?width=512',
      'https://asset.mmm.dev/a2/f2c3d645ae46c3b35f778d6938e35c/1h7s18x.jpg?width=256',
      'https://asset.mmm.dev/03/e83f0addaf4d73894fc8dae55460a5/1jrlswr.jpg?width=512',
      'https://asset.mmm.dev/5a/069c95d9dc4dbc81fab2f4f242c59a/1jzesqm.jpg?width=512',
      'https://asset.mmm.dev/8e/13c1bb441c49478123806968d08114/jh5h37.jpg?width=512',
      'https://asset.mmm.dev/3f/69514e98f64668a47352198bdad014/33f6t8.jpg?width=512',
      'https://asset.mmm.dev/18/c63c3ecaaa453ab20799c2d12b290b/67utlw.jpg?width=512',
      'https://asset.mmm.dev/67/5f78d9dd234c6aa777470a89b0fbbd/1eiplbn.jpg?width=512',
    ],
    contractor: [
      'https://asset.mmm.dev/60/0d197d3ac5499c90f2bef5cbcc0a90/190i9u1.jpg?width=512',
      'https://asset.mmm.dev/7d/efcf25cdd54480b06954990530ac02/19ekkds.jpg?width=256',
      'https://asset.mmm.dev/2d/f9fbda42ef4664a2ef3057f8416909/yiwve3.jpg?width=256',
      'https://asset.mmm.dev/7f/d5c54312ea408ea6c80ee5bc33d9bf/8dfnp4.jpg?width=256',
      'https://asset.mmm.dev/3b/1a54e95628414ca217ca539ad85878/40s2jw.jpg?width=512',
      'https://asset.mmm.dev/8a/4aa2c872c549eab1fe41e0177ad1d5/ip7sgq.jpg?width=512',
      'https://asset.mmm.dev/e7/0050d3c4f347769db061e1a3438780/169hv4l.jpg?width=256',
      'https://asset.mmm.dev/41/d8911926db470d80057e4f206c369d/1ejjbbi.jpg?width=256',
      'https://asset.mmm.dev/1c/da4849c5cd46668e0bac31234829f6/njawjj.jpg?width=512',
    ],
    weddings: [
      'https://asset.mmm.dev/d3/8128b86e2f4e908ab5f79d7f159d4f/1yw248b.png?width=512',
      'https://asset.mmm.dev/66/1b983c3e5645dcb7175d1d60d29aef/8e0304.jpg?width=512',
      'https://asset.mmm.dev/bf/e3e8d6c3d24e8780bcc449e1228460/197nngl.jpg?width=512',
      'https://asset.mmm.dev/39/4edfada36d458193b6584a26851f22/cnyd6d.jpg?width=256',
      'https://asset.mmm.dev/de/313ceda78b42308942bc4085982141/z82mf7.jpg?width=256',
      'https://asset.mmm.dev/7a/23eb6c7b514d7689b27c395be174cb/11hrzm1.jpg?width=256',
      'https://asset.mmm.dev/5b/65b8f5865d4a6f95eccdcc1f53bb08/onjxs0.jpg?width=256',
      'https://asset.mmm.dev/ac/17f764644b4152b40a9f85849e5798/fd50ow.jpg?width=512',
      'https://asset.mmm.dev/c8/3e45e552c040f0ac8e1afb0f55c6d7/6xisw8.jpg?width=512',
      'https://asset.mmm.dev/20/ff9de19bcb4e1ea67bf3919055370d/cbdbho.jpg?width=512'
    ],
    concerts: [
      'https://asset.mmm.dev/ed/a688025bdd4b779955835aac155e6e/5uttmw.jpg?width=512',
      'https://asset.mmm.dev/25/010bddf35c4d8e89043aed0ceb0104/nyqj5g.jpg?width=512',
      'https://asset.mmm.dev/13/a24ac4cf314709a129b1765d9897d2/1nky9o4.jpg?width=256',
      'https://asset.mmm.dev/8e/29c79bfb1549c79579f56dc26284aa/1jm5toq.jpg?width=512',
      'https://asset.mmm.dev/fa/78e81dab9d42dc9d49a4dacde52ab4/1kn6zx.jpg?width=512',
      'https://asset.mmm.dev/3f/c8cb6493a342acb4439362c6c23448/1i8k1zc.jpg?width=512',
      'https://asset.mmm.dev/9b/d50fb10cd149bdb659cee3f18b8e35/1i4qsah.jpg?width=512',
      'https://asset.mmm.dev/ce/f22fb39a7f4551b33f46f6d84987c5/cg83n7.jpg?width=256',
      'https://asset.mmm.dev/81/aa32bed7a44524804eba408a10971d/je0drd.jpg?width=512',
      'https://asset.mmm.dev/51/463e787b414b099be4884f7aef3157/m5kcj5.jpg?width=512'
    ],
    personal: [
      'https://asset.mmm.dev/b9/0a73769e9f411abf90cf96fac66fe4/v4sdm0.jpg?width=512',
      'https://asset.mmm.dev/b4/103e47b420482d93056c650dfd84f6/16lwcty.jpg?width=256',
      'https://asset.mmm.dev/8a/2f9493898e4ba6929f3a2c7ae1ef08/i65xdy.jpg?width=256',
    ],
    brand: [
      'https://asset.mmm.dev/d4/c567a3f64c48d7843f8bcd9699b8fb/2rw8s3.jpg?width=512',
      'https://asset.mmm.dev/bd/2e1bf0f52d435aa1324f7179e8ef98/6ndf8j.jpg?width=256',
      'https://asset.mmm.dev/d3/968bb2c3014c4fb493b3ad9aff00a5/brs1cq.jpg?width=256',
      'https://asset.mmm.dev/dc/c3c354e94c4ba9ba0c1db0536d8943/1c1sk2v.jpg?width=512',
      'https://asset.mmm.dev/b9/56faa68f654f76b3cf6ffa2fef3b56/1405b24.jpg?width=512',
    ],
    residence: [
      'https://asset.mmm.dev/fc/9e3f4367ba419ebe7a799210a948ae/zieoil.jpg?width=512',
      'https://asset.mmm.dev/a4/db8ac5d26d4bd988b6d7765a5a579c/ysanjp.jpg?width=512',
      'https://asset.mmm.dev/7a/f9bd168eec47609fb6f158def5b7d5/4cna4.jpg?width=512',
      'https://asset.mmm.dev/7f/a46541a8794cff96e77efb53ceec70/1yubw9r.jpg?width=512',
      'https://asset.mmm.dev/ab/a698badfad4877925fbf69ac41e212/1tsmn30.jpg?width=512',
      'https://asset.mmm.dev/86/df2ad86bf3456bbf5a3ce63d5b294d/xwrx1p.jpg?width=512',
      'https://asset.mmm.dev/8f/0f92d47d5f4063a7d307b41deae979/2hk8vu.jpg?width=512',
      'https://asset.mmm.dev/62/561d54021444b78a2acd92f5ad2a23/4fgkuw.jpg?width=512',
    ],
    brandStudio: [
      'https://asset.mmm.dev/40/a238ce90e34a9e8ae5a0878ac3898d/1wqhg37.jpg?width=512',
      'https://asset.mmm.dev/e7/595860e9274108a4df3c104c9c01fb/9n0815.jpg?width=256',
      'https://asset.mmm.dev/d4/013e2971eb4b6581f74a370e607076/1qv9oo7.jpg?width=256',
      'https://asset.mmm.dev/26/5159b77af041c09a4630c695534c66/qy86ps.jpg?width=256',
      'https://asset.mmm.dev/49/27bf4bc01547c1bfceb12ef6921f28/1hoi902.jpg?width=256',
      'https://asset.mmm.dev/fa/8f766cc17749df8fc61c25df72a433/9n0815.jpg?width=256',
      'https://asset.mmm.dev/69/df395e2f9141bebca0c6a2f7cf08a2/c24q12.jpg?width=256',
      'https://asset.mmm.dev/97/e6d3506be24ce4b00c8a458c227665/1dur7gt.jpg?width=256',
    ],
    studio: [
      'https://asset.mmm.dev/ab/2765e95555495da32b0412da4d9e33/1ff4qti.jpg?width=512',
      'https://asset.mmm.dev/c5/fe4e2ec0ca44809dfd31cbbf1caa48/eum6ep.jpg?width=256',
      'https://asset.mmm.dev/f6/b36749e4f3427eb07f2247e1e48ec8/1leyr3e.jpg?width=256',
      'https://asset.mmm.dev/24/22d6bb9c20463680da82c46020f0ff/101sccb.jpg?width=512',
      'https://asset.mmm.dev/b9/d9c38277f142e5a7c5ba6b18dcbe65/va2540.jpg?width=512',
    ],
    polaroid: [
      'https://asset.mmm.dev/a8/bb39f315cc4a34a6071907af4b6c2b/17hh0uy.jpg?width=256',
      'https://asset.mmm.dev/84/bd7c1473c84a2b93b99f2a5f74a053/h4tqzf.jpg?width=256',
      'https://asset.mmm.dev/9a/ba1ced2a3c4b7486074cfb4f76923f/gawl2b.jpg?width=256',
      'https://asset.mmm.dev/62/c2867b1c5d41dea36533584e8ace90/1d7olgz.jpg?width=256',
      'https://asset.mmm.dev/de/25f88c9eae49faa0e5b4168f218953/1owdmyh.jpg?width=256',
      'https://asset.mmm.dev/2d/a0bc726d7d4897bf3ef024bedf919f/czroxr.jpg?width=256',
      'https://asset.mmm.dev/be/4131fe403e4b9bbff557aa3b2b00dc/s90vyu.jpg?width=256',
    ]
  };


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