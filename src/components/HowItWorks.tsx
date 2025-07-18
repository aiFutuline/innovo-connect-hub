import React from 'react';
import { UserPlus, Search, MessageCircle, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your profile and tell us about your expertise, interests, and goals',
      step: '01'
    },
    {
      icon: Search,
      title: 'Discover',
      description: 'Browse projects, partners, and opportunities that match your criteria',
      step: '02'
    },
    {
      icon: MessageCircle,
      title: 'Connect',
      description: 'Reach out to potential partners and start meaningful conversations',
      step: '03'
    },
    {
      icon: Handshake,
      title: 'Collaborate',
      description: 'Form partnerships and bring your innovative ideas to life together',
      step: '04'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is simple. Follow these four steps to find your perfect business partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-blue-600" size={32} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-4"></div>
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