import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe size={18} className="text-gray-600" />
      <button
        onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
        className="flex items-center space-x-1 px-3 py-1 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
      >
        <span className="text-sm font-medium">
          {language === 'ru' ? 'RU' : 'EN'}
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;