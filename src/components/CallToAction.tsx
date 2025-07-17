import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          {t('cta.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl">
            <span>{t('cta.button')}</span>
            <ArrowRight size={20} />
          </button>
          
          <div className="flex items-center space-x-2 text-blue-100">
            <Clock size={16} />
            <span className="text-sm">{t('cta.note')}</span>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-blue-100">Free</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2500+</div>
            <div className="text-sm text-blue-100">Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-blue-100">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;