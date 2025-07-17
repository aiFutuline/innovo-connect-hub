import React from 'react';
import { Search, Shield, Users, BarChart3, Network, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Search,
      titleKey: 'features.smart.title',
      descKey: 'features.smart.desc',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      titleKey: 'features.secure.title',
      descKey: 'features.secure.desc',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      titleKey: 'features.collaboration.title',
      descKey: 'features.collaboration.desc',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      titleKey: 'features.analytics.title',
      descKey: 'features.analytics.desc',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Network,
      titleKey: 'features.network.title',
      descKey: 'features.network.desc',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: HeadphonesIcon,
      titleKey: 'features.support.title',
      descKey: 'features.support.desc',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;