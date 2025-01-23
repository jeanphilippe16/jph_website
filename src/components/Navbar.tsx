import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Camera } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const links = ['home', 'achievements', 'contact', 'about'];

  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <Camera className="h-6 w-6 md:h-8 md:w-8" />
          <span className="text-sm md:text-xl font-bold">1966 Visuals</span>
        </Link>
        
        <div className="flex items-center space-x-3 md:space-x-8">
          {links.map(link => (
            <Link
              key={link}
              to={link === 'home' ? '/' : `/${link}`}
              className={`text-xs md:text-base hover:text-gray-300 text-white ${location.pathname === (link === 'home' ? '/' : `/${link}`) ? 'text-yellow-400' : ''}`}
            >
              {t(`navigation.${link}`)}
            </Link>
          ))}
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
            className="text-xs md:text-base px-2 py-1 md:px-3 md:py-1 border border-white rounded text-white hover:bg-white hover:text-black transition-colors"
          >
            {i18n.language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}