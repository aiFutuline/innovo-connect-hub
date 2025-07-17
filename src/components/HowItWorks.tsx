import React from 'react';
import { UserPlus, Search, MessageCircle, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: UserPlus,
      titleKey: 'howto.step1.title',
      descKey: 'howto.step1.desc',
      color: 'from-blue-500 to-blue-600',
      number: '01'
    },
    {
      icon: Search,
      titleKey: 'howto.step2.title',
      descKey: 'howto.step2.desc',
      color: 'from-green-500 to-green-600',
      number: '02'
    },
    {
      icon: MessageCircle,
      titleKey: 'howto.step3.title',
      descKey: 'howto.step3.desc',
      color: 'from-purple-500 to-purple-600',
      number: '03'
    },
    {
      icon: Target,
      titleKey: 'howto.step4.title',
      descKey: 'howto.step4.desc',
      color: 'from-orange-500 to-orange-600',
      number: '04'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('howto.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('howto.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/50">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
                
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;