import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Camera } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const links = ['home', 'gallery', 'contact', 'about'];

  return (
    <nav className="bg-black text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Camera className="h-8 w-8" />
          <span className="text-xl font-bold">1966 Visuals</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          {links.map(link => (
            <Link
              key={link}
              to={link === 'home' ? '/' : `/${link}`}
              className={`hover:text-gray-300 ${location.pathname === (link === 'home' ? '/' : `/${link}`) ? 'text-yellow-400' : ''}`}
            >
              {t(`navigation.${link}`)}
            </Link>
          ))}
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
            className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition-colors"
          >
            {i18n.language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};