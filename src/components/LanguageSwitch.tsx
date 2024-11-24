import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition duration-300"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Languages className="h-5 w-5" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}