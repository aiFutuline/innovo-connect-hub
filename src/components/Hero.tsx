
import React from 'react';
import { Users, Lightbulb, TrendingUp, Search, ArrowRight, Briefcase, Code, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Предприниматели */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{t('hero.entrepreneurs')}</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">
                {t('hero.entrepreneurs.desc')}
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm">
                {t('hero.entrepreneurs.cta')}
              </button>
            </div>

            {/* Бизнес-эксперты */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{t('hero.business')}</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">
                {t('hero.business.desc')}
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm">
                {t('hero.business.cta')}
              </button>
            </div>

            {/* Технологические эксперты */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{t('hero.tech')}</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">
                {t('hero.tech.desc')}
              </p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-sm">
                {t('hero.tech.cta')}
              </button>
            </div>

            {/* Инвесторы */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{t('hero.investors')}</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">
                {t('hero.investors.desc')}
              </p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 text-sm">
                {t('hero.investors.cta')}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <Search size={20} />
              <span>{t('hero.search')}</span>
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
              <Lightbulb size={20} />
              <span>{t('hero.create')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
