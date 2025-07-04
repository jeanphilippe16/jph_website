import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Facebook, Instagram, Youtube, MessageCircle,Phone } from 'lucide-react';
import { TikTokIcon } from '../components/TikTokIcon';

export const Contact = () => {
  const { t } = useTranslation();
  const contacts = [
    { type: 'whatsapp', icon: MessageCircle, link: 'https://wa.me/22577524618', value: '+225 77 52 46 18' },
    { type: 'email', icon: Mail, link: 'mailto:1966visuals@gmail.com', value: '1966visuals@gmail.com' },
    { type: 'facebook', icon: Facebook, link: 'https://www.facebook.com/profile.php?id=61566974230159', value: '1966 Visuals' },
    { type: 'calls', icon: Phone, link: 'tel:+2250151205774', value: '+225 01 51 20 57 74' },
    { type: 'tiktok', icon: TikTokIcon, link: 'http://www.tiktok.com/@1966visualstiktok', value: '@1966visuals' },
    { type: 'instagram', icon: Instagram, link: 'https://www.instagram.com/1966visuals?igsh=MXA5Mmw2a3Y5Mjd6OQ==', value: '@1966visuals' },
    { type: 'youtube', icon: Youtube, link: 'https://youtube.com/@1966visuals-off?si=hMcmVV5g7gFLHQK8', value: '1966 Visuals' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map(({ type, icon: Icon, link, value }) => (
            <a
              key={type}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Icon className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{t(`contact.${type}`)}</h3>
                <p className="text-gray-400">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};